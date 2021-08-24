import img1 from '../../../assets/techs/csharp.png';
import img2 from '../../../assets/techs/java.png';
import img3 from '../../../assets/techs/php.png';
import img4 from '../../../assets/techs/python.png';
import img5 from '../../../assets/techs/react.png';
import img6 from '../../../assets/techs/ruby.png';
import img7 from '../../../assets/techs/uiux.png';
import img8 from '../../../assets/techs/qa.png';
import img9 from '../../../assets/techs/temp1.png';
import img10 from '../../../assets/techs/temp2.png';
import img11 from '../../../assets/techs/temp3.png';

interface Tech {
  id: number;
  logo: string;
  name: string;
}

const techsFakeAPI = {
  get: (): Tech[] => [
    {
      id: 1,
      logo: img1,
      name: 'C#',
    },
    {
      id: 2,
      logo: img2,
      name: 'Java',
    },
    {
      id: 3,
      logo: img3,
      name: 'PHP',
    },
    {
      id: 4,
      logo: img4,
      name: 'Python',
    },
    {
      id: 5,
      logo: img5,
      name: 'React',
    },
    {
      id: 6,
      logo: img6,
      name: 'Ruby',
    },
    {
      id: 7,
      logo: img7,
      name: 'QA',
    },
    {
      id: 8,
      logo: img8,
      name: 'UI/UX',
    },
    {
      id: 9,
      logo: img9,
      name: '-',
    },
    {
      id: 10,
      logo: img10,
      name: '-',
    },
    {
      id: 11,
      logo: img11,
      name: '-',
    },
  ],
};

export default techsFakeAPI;
