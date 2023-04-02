import styles from './About.module.scss';

const About = () => {
  return (
    <main className={styles.main}>
      <h2 className={styles.main_title}>About Us</h2>
      <p className={styles.main_paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie eu erat ut
        pellentesque. Maecenas imperdiet ligula ullamcorper viverra lacinia. Sed auctor, nisi ut
        pretium porttitor, sem velit laoreet libero, vitae iaculis urna dui quis justo. Vestibulum
        convallis ultrices nisl nec hendrerit. Sed convallis risus ante, vel aliquet quam maximus
        rutrum. In hac habitasse platea dictumst. Maecenas enim ipsum, sollicitudin ac dolor vitae,
        auctor placerat mauris. Curabitur dapibus felis nunc, vitae vestibulum lorem ultrices vel.
        Pellentesque sit amet nulla eget mauris porta suscipit. Ut eu ex in eros egestas blandit.
      </p>
      <p className={styles.main_paragraph}>
        Nunc ullamcorper metus tellus, eget maximus nunc bibendum in. Quisque placerat consectetur
        metus. Fusce tempus lectus id quam dignissim, in interdum magna dapibus. In quis est arcu.
        Aliquam nibh massa, placerat a eros at, dictum aliquet lorem. Praesent feugiat tellus
        turpis, ut varius odio lobortis at. Nunc non mauris id odio vehicula auctor. Aenean diam
        lectus, feugiat non leo sit amet, lacinia cursus ligula. Aliquam maximus metus non sem
        aliquam pellentesque. Suspendisse ac ultricies nibh, eu fermentum est. Phasellus eros risus,
        efficitur id augue condimentum, volutpat viverra erat.
      </p>
    </main>
  );
};

export default About;
