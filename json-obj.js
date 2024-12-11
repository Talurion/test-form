const addFormObj = {
  'formId': 'string', // addForm
  'date': 'string', // генерирую на фронте
  'tagId': 'string', // идентификатор тега сгенерирую на фронте (nanoid)
  'fullName': 'string',
  'position': 'string',
  'division': 'string',
  'email': 'string',
  'agency': 'string',
  'bpmId': 'string',
  'containerId': 'string',
  'siteType': 'string',
  'siteUrl': 'string',
  'stream': 'string',
  'product': 'string',
  'tagCategory': 'string',
  'tagType': 'string',
  'lifetime': 'number',
  'businessTask': 'string',
  'dateEnd': 'string' // date + lifetime
};

const gtmTagList = {
  'name': 'string', // название тега
  'notes': 'string', // примечание тега - нужна только первая часть, до знака |
  'parentFolderId': 'string', // папка тега
  'paused': 'boolean', // включен или выключен
};
