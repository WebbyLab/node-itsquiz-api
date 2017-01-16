# Official client for itsquiz.com REST API

```javascript
import itsquiz from 'itsquiz-api';
const api = itsquiz({ apiPrefix: 'https://app.itsquiz.com/api/v1' });

await api.sessions.create({ login: 'mylogin', password: 'mypassword' });
const quizzes = await api.quizzes.list();
```
