/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "th3mzweyy0o2bp7",
    "created": "2024-03-06 15:50:53.751Z",
    "updated": "2024-03-06 15:50:53.751Z",
    "name": "gameRecords",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "23socsgc",
        "name": "dateTime",
        "type": "date",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "1fyackfk",
        "name": "notes",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "zjl7h8py",
        "name": "gameId",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "mf4qeid35eli2tj",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("th3mzweyy0o2bp7");

  return dao.deleteCollection(collection);
})
