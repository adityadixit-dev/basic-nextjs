# Setup a local instance of postgres

- Check if psql is working.
- If you get an error saying `psql` was not found then you will have to install postgres according the specifications of your operating system
```bash
psql --version
```

## Optional - [Installing on Fedora](https://docs.fedoraproject.org/en-US/quick-docs/postgresql/)


### Install packages and setup

```bash
sudo dnf install postgresql-server postgresql-contrib
sudo systemctl enable postgresql
sudo postgresql-setup --initdb --unit postgresql
sudo systemctl start postgresql
```

### User creation

- Enter `psql` prompt

```bash
sudo -u postgres psql
```

- Create user 'postgres' with password 'postgres' for local use

```sql
CREATE USER postgres WITH PASSWORD 'postgres'
```

- If the user already exist, change the password using `\password postgres`


### Create and connect to Database


- `sudo -u postgres psql` to enter the psql prompt
- `CREATE DATABASE test_db;` to create a test database. Note the semi-colon at the end
- `\c test_db` to connect to the database
- `CREATE TABLE users (name TEXT)` to create a simple `users` table
- `SELECT * FROM users;` to make a test query
- Connect to test_db using `psql "postgres://postgres:postgres@localhost:5432/test_db"`


### Troubleshoot possible `Ident authentication failed for user "postgres"` error

- Update `/var/lib/pgsql/data/pg_hba.conf` to look something like below. change the `ident` method to `md5`
- Remember to restart the service using `sudo systemctl restart postgresql`

```
# TYPE  DATABASE        USER            ADDRESS                 METHOD
# "local" is for Unix domain socket connections only
local   all             all                                     peer
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
# IPv4 internal network connections:                                
host    all             all             192.168.122.1/24        md5
# IPv6 local connections:
host    all             all             ::1/128                 md5
# Allow replication connections from localhost, by a user with the
# replication privilege.
local   replication     all                                     peer
host    replication     all             127.0.0.1/32            md5
host    replication     all             ::1/128                 md5
```



## Add Database url to `.env` file

- For local use the `DATABASE_URL` env variable will look something like this

```
DATABASE_URL="postgres://postgres:postgres@localhost:5432/test_db?sslmode=disable"
```



















