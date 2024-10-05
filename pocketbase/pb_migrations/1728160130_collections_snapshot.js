/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2024-03-06 15:41:23.991Z",
      "updated": "2024-03-10 08:51:39.130Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
          "name": "name",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "mimeTypes": [
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": null,
            "maxSelect": 1,
            "maxSize": 5242880,
            "protected": false
          }
        }
      ],
      "indexes": [],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": null,
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "onlyVerified": false,
        "requireEmail": false
      }
    },
    {
      "id": "zcs2g3vts76cf7n",
      "created": "2024-03-06 15:44:29.823Z",
      "updated": "2024-10-05 19:58:03.046Z",
      "name": "groups",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "yxehxwa3",
          "name": "name",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "g1qrnkvf",
          "name": "users",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": null,
            "displayFields": null
          }
        }
      ],
      "indexes": [],
      "listRule": "@request.auth.id != \"\" && users.id ?= @request.auth.id",
      "viewRule": "@request.auth.id != \"\" && users.id ?= @request.auth.id",
      "createRule": "@request.auth.id != \"\" && users.id ?= @request.auth.id",
      "updateRule": "@request.auth.id != \"\" && users.id ?= @request.auth.id",
      "deleteRule": "@request.auth.id != \"\" && users.id ?= @request.auth.id",
      "options": {}
    },
    {
      "id": "yrd3f6s4c3eemzh",
      "created": "2024-03-06 15:47:33.524Z",
      "updated": "2024-09-28 18:45:47.035Z",
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
          "id": "qf9kdotn",
          "name": "group",
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
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "mf4qeid35eli2tj",
      "created": "2024-03-06 15:48:43.725Z",
      "updated": "2024-09-28 18:45:33.556Z",
      "name": "games",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "kjz1utnr",
          "name": "name",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": 1,
            "max": 128,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "0iix7p0w",
          "name": "group",
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
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "th3mzweyy0o2bp7",
      "created": "2024-03-06 15:50:53.751Z",
      "updated": "2024-09-28 18:45:13.843Z",
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
          "name": "game",
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
        },
        {
          "system": false,
          "id": "1i2rrwmk",
          "name": "group",
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
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "lnjcewd8dootkkp",
      "created": "2024-03-06 15:52:04.552Z",
      "updated": "2024-09-28 18:45:24.771Z",
      "name": "gameScores",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "wkzcjgqt",
          "name": "score",
          "type": "number",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "noDecimal": false
          }
        },
        {
          "system": false,
          "id": "oryma6of",
          "name": "player",
          "type": "relation",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "yrd3f6s4c3eemzh",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "swx91vop",
          "name": "gameRecord",
          "type": "relation",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "th3mzweyy0o2bp7",
            "cascadeDelete": true,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        }
      ],
      "indexes": [],
      "listRule": null,
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
