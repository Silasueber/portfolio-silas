import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="m-8 bg-white flex flex-row items-center justify-center">
      <div className="max-w-[600px] flex flex-col gap-12">
        <ProjectCard 
        title={'🐶 Rettungshundle'} 
        tagline={'A playful web platform that connects shelter dogs with potential adopters — Wordle-style'} 
        description={'Rettungshundle.de is an interactive, single-page application designed to make dog adoption more engaging and accessible.'} 
        image={'/rettungshundle.png'}
        link={'https://www.rettungshundle.de'}/>

         <ProjectCard 
        title={'📺 Peepo.live'} 
        tagline={'An interactive Twitch-integrated platform that lets streamers engage their audience through curated content rooms.'} 
        description={'Peepo.live is a platform designed for Twitch streamers to collect, display, and react to user-submitted content from platforms like YouTube, TikTok, Spotify, and more — all in real-time.'} 
        image={'/peepo.png'}
        link={'https://www.peepo.live'}/>

         <ProjectCard 
        title={'🧠 Neural Network – Handwritten Object Classifier'} 
        tagline={'A drawing-based neural network trained to classify 8 categories of hand-drawn images.'} 
        description={'This university project explores how neural networks can classify handwritten sketches into 8 object categories, including houses, cars, headphones, and more.'} 
        image={'/handdetection.png'}
        link={'https://github.com/Silasueber/Neural-Network-Hand-Detection'}/>

        <ProjectCard 
        title={'♟️ Neural Network – Chess Position Evaluation'} 
        tagline={'A machine learning project that predicts game outcomes in simplified chess scenarios using neural networks and reinforcement learning.'} 
        description={'This project explores how neural networks can evaluate chess board states and estimate which player is more likely to win. To manage complexity and training time, the system was developed using a "mini chess" variation with fewer pieces.'} 
        image={'/chess.png'}
        link={'https://github.com/Silasueber/NNChess'}/>
      </div>
    </div>
  );
}
