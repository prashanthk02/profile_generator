const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable: ', (answer1) => {
  console.log(`Hello ${answer1}`);

  rl.question('What\'s an activity you like doing?: ', (answer2) => {
    console.log(`wow ${answer2} is great`);

     rl.question('What do you listen to while doing that?: ', (answer3) => {
    console.log(`${answer3} is cool`);

        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.: )', (answer4) => {
    console.log(`${answer4} it is very important meal`);

          rl.question('What\'s your favourite thing to eat for that meal?: ', (answer5) => {
    console.log(`${answer5}, aha, intresting!`);

            rl.question('Which sport is your absolute favourite?: ', (answer6) => {
    console.log(`I love ${answer6} too`);

              rl.question('What is your superpower? In a few words, tell us what you are amazing at!: ', (answer7) => {
    console.log(`wow ${answer7} is great`);

                  rl.question('Press enter to create your profile', () => {
    console.log(`${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`);
        rl.close();
              });
            });
          });
        });
      });
    });
  });
});