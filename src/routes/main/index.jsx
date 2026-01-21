import './index.css';

import { WelcomeLogo } from '../../components/pages/main/welcomeLogo/welcomeLogo';
import OptionsMenu from '../../components/pages/main/optionsMenu/optionsMenu'

export default function Index(){
  return (
    <div className="body">
      <WelcomeLogo/>
      <OptionsMenu/>
    </div>
  )
}