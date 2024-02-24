// Write your code here

import {useState} from 'react'

import {BgForAll, Para, Image, Button} from './styledComponents'

const Unlock = () => {
  const [conditionOne, setCondition] = useState(false)

  console.log(conditionOne)

  const changeCondition = () => {
    setCondition(prevState => !prevState)
  }

  return (
    <BgForAll>
      <div>
        <div>
          {conditionOne ? (
            <Image
              src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
              alt="unlock"
            />
          ) : (
            <Image
              src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
              alt="lock"
            />
          )}
        </div>

        <Para>
          {conditionOne ? 'Your device is Unlocked' : 'Your device is Locked'}
        </Para>
      </div>
      <Button type="button" onClick={changeCondition}>
        {conditionOne ? 'Lock' : 'Unlock'}
      </Button>
    </BgForAll>
  )
}

export default Unlock
