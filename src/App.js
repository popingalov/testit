import Header from 'components/Header';
import Hero from 'components/Hero';
import Button from 'components/Button';
import WeProvide from 'components/WeProvide';
import Container from 'components/Container';
import { useEffect, useState } from 'react';
import Spiner from 'components/Spiner';
import BusinessCases from 'components/BusinessCases';
import Galery from 'components/Galery';
import Blog from 'components/Blog';
import Team from 'components/Team';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
function App() {
  const [test, setTest] = useState(false);

  const checkWebp = function () {
    try {
      return (
        document
          .createElement('canvas')
          .toDataURL('image/webp')
          .indexOf('data:image/webp') == 0
      );
    } catch (err) {
      return false;
    }
  };

  useEffect(() => {
    if (checkWebp()) {
      setTest(true);
    }
  }, []);
  return (
    <Container>
      {!test ? (
        <Spiner />
      ) : (
        <>
          <Hero test={test}>
            <Header />
            <Button />
          </Hero>
          <WeProvide test={test} />
          <BusinessCases />
          <Galery test={test} />
          <Blog test={test} />
          <Team test={test} />
          <Contact test={test} />
          <Footer />
        </>
      )}
    </Container>
  );
}

export default App;
