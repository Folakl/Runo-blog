import React from 'react'
import jennifer from '../assets/david.png'
import x from '../assets/VectorX.png'
import fb from '../assets/Vectorfb.png'
import youtube from '../assets/Vectoryoutube - Copy.png'
import pinterest from '../assets/VectorPinterest.png'

const Blogarticles = () => {
  return (
    <div className='flex my-10 mx-10'>
    <div className='w-[20%] mr-10 font-bold'>
    <h3>08.08.2021 __________4 minutes</h3>
    </div>
    <div className='w-[80%]'>
    <h3>Seamlessly syndicate cutting-edge architectures rather than collaborative collaboration and idea-sharing. Proactively incubate visionary interfaces whereas premium benefits. Seamlessly negotiate ubiquitous leadership skills rather than parallel ideas. Dramatically visualize superior interfaces for best-of-breed alignments. Synergistically formulate performance based users through customized relationships. Interactively deliver cross-platform ROI via granular systems. Intrinsicly enhance effective initiatives vis-a-vis orthogonal outsourcing. Rapidiously monetize market-driven opportunities with multifunctional users. Collaboratively enhance visionary opportunities through revolutionary schemas. Progressively network just in time customer service without real-time scenarios.</h3>
    <h3 className='my-5'>Synergistically drive e-business leadership with unique synergy. Compellingly seize market positioning ROI and bricks-and-clicks e-markets. Proactively myocardinate timely platforms through distributed ideas. Professionally optimize enabled core competencies for leading-edge sources. Professionally enhance stand-alone leadership with innovative synergy. Rapidiously generate backend experiences vis-a-vis long-term high-impact relationships. Authoritatively supply market-driven mindshare and bricks-and-clicks opportunities. Holisticly create diverse innovation through adaptive communities. Efficiently empower seamless meta-services with impactful opportunities. Distinctively transition virtual outsourcing with focused e-tailers.</h3>
    <h3 className='text-[orange] lg:text-[60px] md:text-[40px] text-[30px] mb-5'>“ Monotonectally seize superior mindshare rather than efficient technology. ” </h3>
    <h3>Compellingly enhance seamless resources through competitive content. Continually actualize 24/365 alignments for resource-leveling platforms. Energistically enhance high standards in models and professional expertise. Intrinsicly iterate extensible metrics for prospective opportunities. Continually develop leading-edge experiences through quality e-services.</h3>
    <div >
    <div className='flex gap-5 my-10'>
     <h3>ADVENTURE</h3>
      <h3>PHOTO</h3>
      <h3>DESIGN</h3>
     </div>
     <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 '>
      <div className='flex '>
        <img src={jennifer} alt="" />
      <div className='mx-5'>
      <h3 className='font-bold  '> By Jennifer Lawrence</h3>
      <h3>Thinker & Designer</h3>
      </div>
 
      </div> 
      <div className='flex gap-5 mt-10 '>
        <img src={fb} alt="" className='w-[20px] h-[20px]' />
        <img src={x} alt="" className='w-[20px] h-[20px]' />
        <img src={pinterest} alt="" className='w-[20px] h-[20px]' />
        <img src={youtube} alt=""  className='w-[20px] h-[20px]'/>

      </div>
     </div>
     
    </div>
   
    </div>
    
    </div>
  )
}

export default Blogarticles
