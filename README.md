## Running locally

```bash
pnpm install
pnpm dev
```

Если не запускается, то нужно запустить миграции:
```bash
pnpm run db:push
```

env
```
это для dify reasoning
DIFY_SECOND_KEY=
```

app id это dify-application-id в ссылке на приложение
```
Application ID: Serves as the model ID in your code, can be found in the URL: https://cloud.dify.ai/app/${dify-application-id}/workflow
```
Your app template should now be running on [localhost:3000](http://localhost:3000).
