import pwc from 'pretty-web-console';

const logger = pwc()
  .fantasy()
  .size('large')
  .weight('bold');

let a = 'Hello!';

logger.log(a);

let helloWorld = () => {
  logger.log('Hello H');
};

helloWorld();
