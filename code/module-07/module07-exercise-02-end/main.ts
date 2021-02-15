
import dotenv from 'dotenv';

const result = dotenv.config();

if (result.error) {
    throw result.error;
}

console.log(result.parsed);
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
