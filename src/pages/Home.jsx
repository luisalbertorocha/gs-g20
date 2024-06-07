import { Carousel } from '@material-tailwind/react'
import { CardBlog } from '../components/CardBlog'

const data = [
  {
    img: 'https://voiceoftheoceans.com/wp-content/uploads/2024/05/pexels-mikhail-nilov-8318261-1920x480.jpg',
    title: 'NEGACIONISMO CLIMÁTICO: DÉCADAS DE DESINFORMAÇÃO',
    text: 'As fake news sobre clima ressurgem com a tragédia no Rio Grande do Sul. Negacionismo climático, impulsionado por interesses políticos e econômicos, prolifera nas redes sociais. No Brasil, 28% minimizam a contribuição humana ao aquecimento global, enquanto 15% negam sua existência, refletindo uma estratégia deliberada de desinformação por certos grupos.',
    link: 'https://voiceoftheoceans.com/negacionismo-climatico-decadas-de-desinformacao/',
  },
  {
    img: 'https://voiceoftheoceans.com/wp-content/uploads/2024/04/1000001935-800x480.png',
    title:
      'SOU CERRADO: BRASIL GANHA INICIATIVA INÉDITA PARA ENGAJAR POPULAÇÃO NA CONSERVAÇÃO DO BIOMA',
    text: 'Apenas 23% dos brasileiros são capazes de descrever o clima do Cerrado; 64% dos brasileiros acreditam que a Amazônia está sendo mais desmatada que o Cerrado; 66% dos brasileiros não sabem que o Tucano é um23 animal do Cerrado; 70% dos brasileiros não sabem que há Cerrado na Bahia, totalizando 9 estados abrangidos pelo bioma.',
    link: 'https://voiceoftheoceans.com/sou-cerrado-brasil-ganha-iniciativa-inedita-para-engajar-populacao-na-conservacao-do-bioma/',
  },
  {
    img: 'https://voiceoftheoceans.com/wp-content/uploads/2024/04/dji_0006-1920x480.jpg',
    title:
      'TECNOLOGIAS SUSTENTÁVEIS: INICIATIVAS INOVADORAS PARA A PRESERVAÇÃO DOS OCEANOS',
    text: 'Os oceanos são essenciais para o planeta, fornecendo oxigênio, regulando o clima e sustentando a vida. No entanto, enfrentam ameaças como poluição, pesca predatória e mudanças climáticas. Iniciativas inovadoras estão surgindo para proteger esses ecossistemas vitais. Vamos explorar algumas tecnologias sustentáveis revolucionando a conservação dos oceanos.',
    link: 'https://voiceoftheoceans.com/tecnologias-sustentaveis-iniciativas-inovadoras-para-a-preservacao-dos-oceanos/',
  },
  {
    img: 'https://voiceoftheoceans.com/wp-content/uploads/2024/02/untitled-design-19-1920x480.png',
    title: '“OÁSIS” SUBMERSO É DESCOBERTO NO ESPÍRITO SANTO',
    text: 'Pesquisadores brasileiros descobriram as "Colinas Coralinas" na cadeia Vitória-Trindade, Espírito Santo. Com mais de 60 metros de altura, a formação de algas coralináceas abriga diversas espécies, incluindo o ameaçado tubarão-lixa, destacando-se como refúgio vital para a biodiversidade marinha.',
    link: 'https://voiceoftheoceans.com/oasis-submerso-e-descoberto-no-espirito-santo/',
  },
]

export const Home = () => {
  return (
    <>
      <div className="flex w-full grow items-center justify-center rounded-3xl">
        <Carousel className="container overflow-hidden rounded-2xl" loop="true" >
          {data.map((item) => (
            <CardBlog key={item.link} post={item} />
          ))}
        </Carousel>
      </div>
    </>
  )
}
