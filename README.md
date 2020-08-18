# web-app-template

## 環境変数

### api
- MYSQL_USER
- MYSQL_PASSWORD

### db
- MYSQL_ROOT_PASSWORD

## 起動
```
docker-compose up
```

## 実行結果

### api
```
$ curl localhost:3000/users
[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]
```
