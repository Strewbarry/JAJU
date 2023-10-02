

// Redis에 값을 저장
async function setValue (a, select) {
    const Redis = require('ioredis');

// Redis 서버에 연결
const redis = new Redis({
  host: 'j9c104.p.ssafy.io',
  port: 6379, // Redis 기본 포트
  password: 'c104' // 설정된 경우에만 필요
});
  try {
    if ( select === 1) {

        // const x = a.toString()
        // const y = b.toString()
        await redis.set('status', 'start')
        await redis.set('cmd', a);
        console.log('값이 설정되었습니다.');
    }
    else {
        await redis.set('status', 'stop')
    }
  } catch (error) {
    console.error('오류 발생:', error);
  } finally {
    redis.quit(); // 연결 종료
  }
}
// const a = 'asdf'
// const b = 'as'
// setValue(a, 1);
async function checkRedisValue() {
  const Redis = require('ioredis');

// Redis 서버에 연결
const redis = new Redis({
  host: 'j9c104.p.ssafy.io',
  port: 6379, // Redis 기본 포트
  password: 'c104' // 설정된 경우에만 필요
});
  try {
    const value = await redis.get('status'); // 여기에 조회하고 싶은 Redis 키를 입력하세요
    if (value !== null) {
      console.log('Redis 값:', value);
      
    } else {
      console.log('Redis에 저장된 값이 없습니다.');
    }
  } catch (error) {
    console.error('Redis 조회 오류:', error);
  }
}
// setInterval(checkRedisValue, 1000)


module.exports = {setValue, checkRedisValue}