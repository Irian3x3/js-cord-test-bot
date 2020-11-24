# JSCord Test Bot
This is the test bot for [JSCord](../../../js-cord).  
If you feel like forking this for some dumb reason remember to create a `config.ts` file in the [`/test`](test) directory:
```ts
export class Config {
    token = "your token"
}
```
Then run tsc since typescript has to be compiled to js:
```sh
tsc
```
Run the bot:
```sh
node .
```
You have successfully created a clone of a test bot. Have fun I guess?