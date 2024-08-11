import { DB_CONFIG } from '../config/db.config.js';

test('DB_CONFIG_HOST_IS_NOT_NULL', 
  () => {
    expect(DB_CONFIG.HOST).not.toBeNull();
  }
)