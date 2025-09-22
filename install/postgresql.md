---
visible: true
layout: default
---

# PostgreSQL – instrukcja instalacji

Aby móc korzystać w pełni z baz danych PostgreSQL należy zainstalować:
- PostgreSQL
- Klienta bazodanowego (rekomenduję pgAdmin4)
- bibliotekę [`psycopg`](https://pypi.org/project/psycopg/)


#### 1. Windows
Wejdź na [https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/) a następnie kliknij **Download the installer** aby przenieść się na stronę enterprisedb.com:

![postgresql](/assets/img/instalki/postgres1.png)

Pobierz najnowszą wersję instalatora dla systemu Windows. W trakcie instalacji **zachowaj domyślne ustawienia**. Możesz jedynie odznaczyć instalację Stack Buildera.

Jeżeli instalator poprosi o ustawienie hasła, pamiętaj że ta baza będzie dostępna tylko na serwerze lokalnym. Hasło nie musi być więc złożone, a ponieważ w niektórych przykładach będzie ono trzymane w kodzie, nie powinno być również tajne. Zalecane hasło: *postgres*

Ta instalacja obejmuje zarówno bazę danych PostgreSQL, jak również klienta pgAdmin4. Aby zainstalować bibliotekę `psycopg` użyj komendy:


`pip install psycopg`

w Anaconda Prompt (jeśli używasz Anacondy) lub w CMD.

#### 2. Linux

Instalacja na przykładzie dystrybucji Ubuntu:

**PostgreSQL**

<pre>
sudo apt install postgresql -y
sudo -u postgres psql

# tutaj otworzy się interfejs CLI  postgresa

ALTER USER postgres PASSWORD 'postgres';
\q 
</pre>

**pgAdmin**

<pre>
curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add

sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && apt update' 

sudo apt install pgadmin4 -y
</pre>

**`psycopg`**

Jeżeli używasz Anacondy, upewnij się, że jest ona aktywna w terminalu. Następnie wykonaj instrukcję:

`pip install psycopg`


## Test działania

Aby sprawdzić, czy instalacja przebiegła pomyślnie wykonaj poniższy skrypt, wstawiając do niego swoje hasło:

<pre>
import psycopg

db_password = "postgres"

# ---
create_query = "create table test (a integer, b integer)"
conn = psycopg.connect(dbname="postgres", user="postgres", password=db_password, host="localhost")
cur = conn.cursor()

cur.execute(create_query)
conn.commit()

cur.close()
conn.close()
</pre>

a następnie otwórz pgAdmina i sprawdź, czy pojawiła się w nim tabela "test":

![pgadmin](/assets/img/instalki/postgres2.png)

