const { Pool } = require('pg');

const pool = new Pool({
    user: 'vpyravtstdizsy',
    password: '62442bae415b85c36b8e5baa355efdac26e2693b9b2462ed3eddbeb587865988',
    host: 'ec2-35-174-118-71.compute-1.amazonaws.com',
    port: 5432,
    database: 'd9j0su1trtav0h',
    ssl: {
        rejectUnauthorized: false,
    },
});

module.exports = pool;
