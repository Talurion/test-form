### Шаг 1: Создание проекта в Google Apps Script

1. Откройте Google Sheets.
2. Перейдите в меню **Расширения** -> **Apps Script**.
3. Создайте новый проект.

### Шаг 2: Получение данных из Google Sheets

Используйте следующий код для получения данных из таблицы:

```javascript
function createMarkdownFile() {
  // Получение данных из таблицы
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();

  // Создание содержимого для Markdown
  let markdownContent = "# Заголовок\n\n";
  
  data.forEach(row => {
    markdownContent += row.join(" | ") + "\n";
  });

  // Создание файла
  const fileName = "data.md";
  const file = DriveApp.createFile(fileName, markdownContent, MimeType.PLAIN_TEXT);
  
  // Отправка файла в GitHub
  uploadToGitHub(file);
}
```

### Шаг 3: Отправка файла в репозиторий GitHub

Для отправки файла в GitHub вам нужно использовать GitHub API. Для этого вам понадобится токен доступа.

1. Создайте токен доступа в настройках вашего GitHub аккаунта.
2. Добавьте следующий код для загрузки файла в GitHub:

```javascript
function uploadToGitHub(file) {
  const githubToken = 'ВАШ_ТОКЕН_ДОСТУПА'; // Замените на ваш токен
  const repo = 'ВАШ_ПОЛНЫЙ_ПУТЬ_К_РЕПОЗИТОРИЮ'; // Например, 'username/repo'
  const filePath = 'data.md'; // Путь к файлу в репозитории

  const url = `https://api.github.com/repos/${repo}/contents/${filePath}`;
  const content = Utilities.base64Encode(file.getBlob().getBytes());

  const payload = {
    message: 'Добавление файла data.md',
    content: content,
    branch: 'main' // Убедитесь, что указали правильную ветку
  };

  const options = {
    method: 'put',
    contentType: 'application/json',
    headers: {
      Authorization: 'token ' + githubToken
    },
    payload: JSON.stringify(payload)
  };

  const response = UrlFetchApp.fetch(url, options);
  Logger.log(response.getContentText());
}
```

### Шаг 4: Запуск скрипта