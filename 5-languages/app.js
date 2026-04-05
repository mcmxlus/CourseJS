const answer = prompt('What language do you want to communicate in?', 'en');

switch (answer) {
   case 'en':
      console.log('Hello!');
      break;
   case 'ru':
      console.log('Привет!');
      break;
   case 'de':
      console.log('Gutten tag!');
      break;
   default:
      console.log('This language is not supported yet.');
}