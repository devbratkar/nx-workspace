import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Home.css';
import { Header } from '@frontendone/header';
import { useGetAllPostsQuery } from '@frontendone/redux';

const Home: React.FC = () => {
  const { data } = useGetAllPostsQuery('');
  console.log(data);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Header title="This is a header." className="head" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
