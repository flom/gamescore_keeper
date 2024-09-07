/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yrd3f6s4c3eemzh",
    "created": "2024-03-06 15:47:33.524Z",
    "updated": "2024-03-06 15:47:33.524Z",
    "name": "players",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1t2jsjql",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 128,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vzc9kxmc",
        "name": "initials",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 3,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "l9oa8xqs",
        "name": "color",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": "#[\\dA-Fa-f]{6}"
        }
      },
      {
        "system": false,
        "id": "lr4wwmwa",
        "name": "groupId",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "zcs2g3vts76cf7n",
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
  const collection = dao.findCollectionByNameOrId("yrd3f6s4c3eemzh");

  return dao.deleteCollection(collection);
})
