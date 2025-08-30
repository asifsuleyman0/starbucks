import { Link } from 'react-router-dom';
import { newsData } from '../Provider/newdata.js';

const News = () => {
  return (
    <div className="xl:max-w-3/4 xl:mx-auto">
      {newsData.map((item) => (
        <div key={item.id} className="flex flex-col md:flex-row my-8">
          <div className={`w-full lg:w-1/2 ${item.imageOrder} relative ${item.imageAspectRatio} ${item.lgImageAspectRatio} order-1`}>
            <img src={item.image} className="absolute inset-0 w-full h-full object-cover" alt={item.imageAlt}/>
          </div>
          <div className={`w-full lg:w-1/2 ${item.backgroundColor} flex flex-col justify-center items-center ${item.textPadding} ${item.textOrder} ${item.textMinHeight} order-2`}>
            <div className="text-center max-w-lg space-y-4 lg:space-y-6">
              <h2 className={`${item.titleSize} font-bold ${item.textColor} leading-tight tracking-tight`}>{item.title}</h2>
              <p className={`${item.descriptionSize} ${item.textColor} leading-relaxed opacity-90`}>{item.description}</p>
              <Link to={'/menu'}>
                <button className={`inline-flex items-center justify-center bg-transparent border-2 ${item.borderColor} ${item.textColor} px-6 sm:px-8 py-3 rounded-full font-bold ${item.buttonSize} ${item.hoverBg} ${item.hoverText} transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 ${item.focusRing} focus:ring-offset-2 min-w-[140px]`}>
                  {item.buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;