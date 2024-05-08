import Model1 from "../Models/F1/model1";
import Model2 from "../Models/F2/Model2";
import Model3 from "../Models/F3/mainpage";


export const RenderPage = ({ model, data }) => {
    switch (model) {
      case 'model1':
        return Model1
      case 'model2':
        return Model2 ;
      case 'model3':
        return Model3;
      default:
        return null;
    }
  };
  
