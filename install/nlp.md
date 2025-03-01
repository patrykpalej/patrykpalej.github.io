---
visible: true
layout: default
---

# Analiza danych tekstowych – instrukcja instalacji

Rekomendowana wersja Pythona: >=3.11

Materiały udostępnione zostaną w plikach .ipynb (Jupyter Notebook) i edytor ten jest rekomendowany podczas szkolenia.


Będą potrzebne również następujące biblioteki:

- [requests](https://pypi.org/project/requests/)
- [beautifulsoup4](https://pypi.org/project/beautifulsoup4/)
- [numpy](https://pypi.org/project/numpy/)
- [pandas](https://pypi.org/project/pandas/)
- [matplotlib](https://pypi.org/project/matplotlib)
- [jupyterlab](https://pypi.org/project/jupyterlab)
- [scikit-learn](https://pypi.org/project/scikit-learn/)
- [spacy](https://pypi.org/project/spacy/)
- [nltk](https://pypi.org/project/nltk/)
- [pystempel](https://pypi.org/project/pystempel/)
- [wordcloud](https://pypi.org/project/wordcloud/)
- [gensim](https://pypi.org/project/gensim/)
- [presidio-anonymizer](https://pypi.org/project/presidio-anonymizer/)
- [presidio-analyzer](https://pypi.org/project/presidio-analyzer/)
- [openai](https://pypi.org/project/openai/)


Oprócz tego potrzebne będzie pobranie modeli używanych przez powyższe biblioteki.



W terminalu/wierszu poleceń wykonaj:

`python -m spacy download pl_core_news_sm`

`python -m spacy download en_core_web_sm`



Rekomendowane jest utworzenie środowiska wirtualnego. Poniżej znajduje się zawartość pliku `requirements.txt` uwzględniającego pobranie powyższych modeli.

<pre>
annotated-types==0.7.0
anyio==4.4.0
argon2-cffi==23.1.0
argon2-cffi-bindings==21.2.0
arrow==1.3.0
asttokens==2.4.1
async-lru==2.0.4
attrs==24.2.0
azure-core==1.30.2
babel==2.16.0
beautifulsoup4==4.12.3
bleach==6.1.0
blis==0.7.11
catalogue==2.0.10
certifi==2024.7.4
cffi==1.17.0
charset-normalizer==3.3.2
click==8.1.7
cloudpathlib==0.18.1
comm==0.2.2
compress-pickle==2.1.0
confection==0.1.5
contourpy==1.2.1
cycler==0.12.1
cymem==2.0.8
debugpy==1.8.5
decorator==5.1.1
defusedxml==0.7.1
distro==1.9.0
en-core-web-lg @ https://github.com/explosion/spacy-models/releases/download/en_core_web_lg-3.7.1/en_core_web_lg-3.7.1-py3-none-any.whl#sha256=ab70aeb6172cde82508f7739f35ebc9918a3d07debeed637403c8f794ba3d3dc
en-core-web-sm @ https://github.com/explosion/spacy-models/releases/download/en_core_web_sm-3.7.1/en_core_web_sm-3.7.1-py3-none-any.whl#sha256=86cc141f63942d4b2c5fcee06630fd6f904788d2f0ab005cce45aadb8fb73889
executing==2.0.1
fastjsonschema==2.20.0
filelock==3.15.4
fonttools==4.53.1
fqdn==1.5.1
gensim==4.3.3
h11==0.14.0
httpcore==1.0.5
httpx==0.27.0
idna==3.7
ipykernel==6.29.5
ipython==8.26.0
isoduration==20.11.0
jedi==0.19.1
Jinja2==3.1.4
jiter==0.5.0
joblib==1.4.2
json5==0.9.25
jsonpointer==3.0.0
jsonschema==4.23.0
jsonschema-specifications==2023.12.1
jupyter-events==0.10.0
jupyter-lsp==2.2.5
jupyter_client==8.6.2
jupyter_core==5.7.2
jupyter_server==2.14.2
jupyter_server_terminals==0.5.3
jupyterlab==4.2.4
jupyterlab_pygments==0.3.0
jupyterlab_server==2.27.3
kerncraft==0.8.15
kiwisolver==1.4.5
langcodes==3.4.0
language_data==1.2.0
marisa-trie==1.2.0
markdown-it-py==3.0.0
MarkupSafe==2.1.5
matplotlib==3.9.2
matplotlib-inline==0.1.7
mdurl==0.1.2
mistune==3.0.2
mpmath==1.3.0
murmurhash==1.0.10
nbclient==0.10.0
nbconvert==7.16.4
nbformat==5.10.4
nest-asyncio==1.6.0
networkx==3.3
nltk==3.8.1
notebook_shim==0.2.4
numpy==1.26.4
openai==1.46.0
osaca==0.5.3
overrides==7.7.0
packaging==24.1
pandas==2.2.2
pandocfilters==1.5.1
parso==0.8.4
pexpect==4.9.0
phonenumbers==8.13.43
pillow==10.4.0
pl-core-news-sm @ https://github.com/explosion/spacy-models/releases/download/pl_core_news_sm-3.7.0/pl_core_news_sm-3.7.0-py3-none-any.whl#sha256=94fd294e49f87fccf863f2792a1d89be1a0fd0a3c549790b2c8338ac304bee36
platformdirs==4.2.2
preshed==3.0.9
presidio_analyzer==2.2.355
presidio_anonymizer==2.2.355
prometheus_client==0.20.0
prompt_toolkit==3.0.47
psutil==6.0.0
ptyprocess==0.7.0
pure_eval==0.2.3
pycachesim==0.3.1
pycparser==2.22
pycryptodome==3.20.0
pydantic==2.8.2
pydantic_core==2.20.1
Pygments==2.18.0
pyparsing==3.1.2
pystempel==2.0.0
python-dateutil==2.9.0.post0
python-json-logger==2.0.7
pytz==2024.1
PyYAML==6.0.2
pyzmq==26.1.0
referencing==0.35.1
regex==2024.7.24
requests==2.32.3
requests-file==2.1.0
rfc3339-validator==0.1.4
rfc3986-validator==0.1.1
rich==13.7.1
rpds-py==0.20.0
ruamel.yaml==0.18.6
ruamel.yaml.clib==0.2.8
scikit-learn==1.5.1
scipy==1.13.1
Send2Trash==1.8.3
shellingham==1.5.4
six==1.16.0
smart-open==7.0.4
sniffio==1.3.1
sortedcontainers==2.4.0
soupsieve==2.6
spacy==3.7.5
spacy-legacy==3.0.12
spacy-loggers==1.0.5
srsly==2.4.8
stack-data==0.6.3
sympy==1.13.2
terminado==0.18.1
textdistance==4.6.3
thinc==8.2.5
threadpoolctl==3.5.0
tinycss2==1.3.0
tldextract==5.1.2
tornado==6.4.1
tqdm==4.66.5
traitlets==5.14.3
typer==0.12.3
types-python-dateutil==2.9.0.20240316
typing_extensions==4.12.2
tzdata==2024.1
uri-template==1.3.0
urllib3==2.2.2
wasabi==1.1.3
wcwidth==0.2.13
weasel==0.4.1
webcolors==24.8.0
webencodings==0.5.1
websocket-client==1.8.0
wordcloud==1.9.3
wrapt==1.16.0

</pre>



Pamiętaj aby zrobić to przy aktywnym środowisku wirtualnym.

Uruchom również poniższy kod. Uwaga - pobieranie modelu będzie czasochłonne!

`import gensim.downloader as api`

`model = api.load('word2vec-google-news-300')`


Model ten zajmuje 1.7GB i zostanie zapisany w folderze `gensim-data` w katalogu użytkownika.



