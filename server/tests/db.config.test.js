import { DB_CONFIG } from '../config/db.config.js';

test('DB_CONFIG_HOST_IS_NOT_NULL', 
  () => {
    expect(DB_CONFIG.HOST).not.toBeNull();
  }
);

test('DB_CONFIG_USER_IS_NOT_NULL', 
  () => {
    expect(DB_CONFIG.USER).not.toBeNull();
  }
);

test('DB_CONFIG_PASSWORD_IS_NOT_UNDEFINED', 
  () => {
    expect(DB_CONFIG.PASSWORD).not.toBeUndefined();
  }
);

test('DB_CONFIG_NAME_IS_NOT_NULL', 
  () => {
    expect(DB_CONFIG.USER).not.toBeNull();
  }
);