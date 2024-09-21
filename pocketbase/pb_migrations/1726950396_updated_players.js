/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrd3f6s4c3eemzh")

  collection.viewRule = "@collection.groupToUsers.groupId = id && @collection.groupToUsers.userId = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrd3f6s4c3eemzh")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
