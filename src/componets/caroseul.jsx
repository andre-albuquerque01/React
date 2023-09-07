import ImgCarroseul1 from "../img/carrosel1.jpg"
import imgDizimo from "../img/ibeDizimo.jpg"
// import background from "../img/backgroundCarrosel.png"
import styles from "../style/carrosel.module.css"

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

function Carousel() {
    return (
        <main>
            <div className={styles.conteinerMain}>
                <div className={styles.carroseul}>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={150}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        autoplay={{  // Configurações do autoplay
                            delay: 4000, // Atraso entre os slides (em milissegundos)
                            disableOnInteraction: false, // O autoplay não é interrompido quando o usuário interage com o swiper
                        }}
                        loop={true}
                    >
                        <SwiperSlide>
                            <img src={ImgCarroseul1} alt="Imagem do carrosel" className={styles.carrosel} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={imgDizimo} alt="Imagem do carrosel" className={styles.carrosel} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={ImgCarroseul1} alt="Imagem do carrosel" className={styles.carrosel} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={imgDizimo} alt="Imagem do carrosel" className={styles.carrosel} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={ImgCarroseul1} alt="Imagem do carrosel" className={styles.carrosel} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </main>
    )
}
export default Carousel