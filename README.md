Progetto cinema
===
## Svolgimento

### Struttura Vue
1. Suddividere in tre grandi componenti : **Header, Main e Footer**
1. Il **Main** sarà suddiviso in 8 sotto componenti : **Jumbo, ContainerCardsThree, AboutUs, Data, ContainerCardsFour, Carosel, Partner e Collaborate**
1. Il **Jumbo e AboutUs**  hanno in comune il sotto componente : **ReadMoreBtn**
1. Il **ContainerCardsThree e ContainerCardsFour** hanno in comune il sotto componente : **Card**
1. Il **Collaborate** ha come sotto componente : **Form**
1. Il **Footer** sarà suddiviso in 2 sotto componenti : **FooterList e Newsletter**

### Stuttura scss
1. Il main con import di general e typhography
1. In partials ci sono general, typography e variables
1. In variables si mettoto tutte le variabili colori e stili 
1. In typography si usa il font e ridimensionamento dei testi
1. In general si mette tutto il codice generale

### Spiegazione Componenti Vue
1. **Header** è diviso in tre parti:
  1. a sinistra il logo
  2. al centro il *menu* che viene ciclato usando *headerMenu.js* e possiede lo shop e pages che aprono una tendina in hover
  3. a destra c'è il cerca e il menu dei *social* che viene ciclato usando *headerMenu.js* 
2. Il **Main** l'ho usato come un contenitore dei vari sottocomponenti del progetto
  1. Il primo sotto componente è il **Jumbo** che cicla le immagini in background prese dal *jumboImg.js* ed è un carosel creato con **Swiper** con delle immagini che cambiano e utilizzo il sotto componente **ReadMoreBtn** per il bottone
  2. Il **ContainerCardsThree** è stato utilizzato tre volte nel progetto e prende sempre tre parametri diversi. Il più importante è il *type* che mi serve a prendere sempre gli elementi diversi dallo *store.js* da ciclare nel sotto componente delle **card** 
  3. **ContainerCardsFour** è uguale all'elemento di sopra con l'unica differenza delle colonne che sono 4 mentre nel punto su sono 3
  4. **Carosel** un carosel simile al jumbo che prende i dati dal *caroselImg.js*
  5. **Collaborate** si occupa della parte del **Form**
3. il **Footer** ha il sotto componente **FooterList** che viene usato 3 volte per i link prendendo i dati dallo *store.js*
