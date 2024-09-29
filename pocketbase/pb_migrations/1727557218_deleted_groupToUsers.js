/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7csvu4apyn4epux");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "7csvu4apyn4epux",
    "created": "2024-03-07 14:51:35.522Z",
    "updated": "2024-03-07 14:54:29.452Z",
    "name": "groupToUsers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lmdz5vqi",
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
      },
      {
        "system": false,
        "id": "jjfy6tqa",
        "name": "userId",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
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
})
