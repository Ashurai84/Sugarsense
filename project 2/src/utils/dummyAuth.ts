export interface DummySession {
  id: string;
  email: string;
}

interface DummyPatientProfile {
  userId: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  diabetes_type: string;
  hba1c: number;
  fasting_glucose: number;
  post_meal_glucose: number;
  target_glucose_min: number;
  target_glucose_max: number;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  emergency_contact_relationship: string;
  updatedAt: string;
}

interface DummyOrder {
  id: string;
  userId: string;
  items: Array<{
    productId: string;
    productName: string;
    quantity: number;
    price: number;
    image?: string;
  }>;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  timestamp: string;
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
}

interface DummyUserRecord {
  id: string;
  email: string;
  password: string;
}

const DUMMY_USERS_KEY = 'sugarsense_dummy_users';
const DUMMY_SESSION_KEY = 'sugarsense_dummy_session';
const DUMMY_INTAKE_PREFIX = 'sugarsense_intake_completed_';
const DUMMY_ORDERS_PREFIX = 'sugarsense_orders_';
const DUMMY_PROFILE_PREFIX = 'sugarsense_patient_profile_';

const DEMO_USER_ID = 'dummy-demo-user';
const DEMO_EMAIL = 'demo@sugarsense.app';
const DEMO_PASSWORD = 'demo1234';

export const DUMMY_AUTH_EVENT = 'dummy-auth-changed';

export const DEMO_CREDENTIALS = {
  email: DEMO_EMAIL,
  password: DEMO_PASSWORD,
};

const readDummyUsers = (): DummyUserRecord[] => {
  const stored = localStorage.getItem(DUMMY_USERS_KEY);
  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writeDummyUsers = (users: DummyUserRecord[]) => {
  localStorage.setItem(DUMMY_USERS_KEY, JSON.stringify(users));
};

const emitAuthChanged = () => {
  window.dispatchEvent(new Event(DUMMY_AUTH_EVENT));
};

const normalizeEmail = (email: string) => email.trim().toLowerCase();

const sessionFromRecord = (record: DummyUserRecord): DummySession => ({
  id: record.id,
  email: record.email,
});

const saveSession = (session: DummySession) => {
  localStorage.setItem(DUMMY_SESSION_KEY, JSON.stringify(session));
  emitAuthChanged();
};

export const getActiveDummySession = (): DummySession | null => {
  const stored = localStorage.getItem(DUMMY_SESSION_KEY);
  if (!stored) return null;

  try {
    const parsed = JSON.parse(stored) as DummySession;
    if (!parsed?.id || !parsed?.email) return null;
    return parsed;
  } catch {
    return null;
  }
};

export const signUpDummy = (email: string, password: string): DummySession => {
  const normalizedEmail = normalizeEmail(email);
  const users = readDummyUsers();

  const existing = users.find((user) => user.email === normalizedEmail);
  if (existing) {
    throw new Error('An account with this email already exists. Please sign in.');
  }

  const newUser: DummyUserRecord = {
    id: `dummy-${Date.now()}`,
    email: normalizedEmail,
    password,
  };

  users.push(newUser);
  writeDummyUsers(users);

  const session = sessionFromRecord(newUser);
  saveSession(session);
  return session;
};

export const signInDummy = (email: string, password: string): DummySession => {
  const normalizedEmail = normalizeEmail(email);
  const users = readDummyUsers();

  const user = users.find((record) => record.email === normalizedEmail);
  if (!user || user.password !== password) {
    throw new Error('Invalid email or password.');
  }

  const session = sessionFromRecord(user);
  saveSession(session);
  return session;
};

export const signOutDummy = () => {
  localStorage.removeItem(DUMMY_SESSION_KEY);
  emitAuthChanged();
};

export const hasCompletedIntake = (userId: string) =>
  localStorage.getItem(`${DUMMY_INTAKE_PREFIX}${userId}`) === 'true';

export const markIntakeCompleted = (userId: string) => {
  localStorage.setItem(`${DUMMY_INTAKE_PREFIX}${userId}`, 'true');
};

const seedDemoProfile = () => {
  const profileKey = `${DUMMY_PROFILE_PREFIX}${DEMO_USER_ID}`;
  if (localStorage.getItem(profileKey)) return;

  const demoProfile: DummyPatientProfile = {
    userId: DEMO_USER_ID,
    name: 'Demo Patient',
    email: DEMO_EMAIL,
    phone: '+91-9876543210',
    age: 34,
    gender: 'male',
    diabetes_type: '2',
    hba1c: 6.9,
    fasting_glucose: 102,
    post_meal_glucose: 145,
    target_glucose_min: 80,
    target_glucose_max: 130,
    emergency_contact_name: 'Anita Sharma',
    emergency_contact_phone: '+91-9988776655',
    emergency_contact_relationship: 'Spouse',
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(profileKey, JSON.stringify(demoProfile));
};

const seedDemoOrders = () => {
  const ordersKey = `${DUMMY_ORDERS_PREFIX}${DEMO_USER_ID}`;
  if (localStorage.getItem(ordersKey)) return;

  const demoOrders: DummyOrder[] = [
    {
      id: 'demo-order-001',
      userId: DEMO_USER_ID,
      items: [
        {
          productId: '1',
          productName: 'Sugar-Free Dark Chocolate Bars',
          quantity: 2,
          price: 25,
        },
      ],
      total: 50,
      status: 'delivered',
      timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      shippingAddress: {
        name: 'Demo Patient',
        address: '221B Wellness Street',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001',
      },
    },
    {
      id: 'demo-order-002',
      userId: DEMO_USER_ID,
      items: [
        {
          productId: '3',
          productName: 'Keto-Friendly Protein Bars (Box of 12)',
          quantity: 1,
          price: 35,
        },
      ],
      total: 35,
      status: 'processing',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      shippingAddress: {
        name: 'Demo Patient',
        address: '221B Wellness Street',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001',
      },
    },
  ];

  localStorage.setItem(ordersKey, JSON.stringify(demoOrders));
};

export const ensureDemoAccount = () => {
  const users = readDummyUsers();
  const exists = users.some((user) => user.email === DEMO_EMAIL);

  if (!exists) {
    users.push({
      id: DEMO_USER_ID,
      email: DEMO_EMAIL,
      password: DEMO_PASSWORD,
    });
    writeDummyUsers(users);
  }

  markIntakeCompleted(DEMO_USER_ID);
  seedDemoProfile();
  seedDemoOrders();
};

export const getDummyOrders = (userId: string): DummyOrder[] => {
  const key = `${DUMMY_ORDERS_PREFIX}${userId}`;
  const stored = localStorage.getItem(key);
  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const saveDummyOrders = (userId: string, orders: DummyOrder[]) => {
  const key = `${DUMMY_ORDERS_PREFIX}${userId}`;
  localStorage.setItem(key, JSON.stringify(orders));
};