import * as usersService from '../../utilities/users-service'

export default function PostHistoryPage() {

  async function handleCheckToken() {
    const expDate = await usersService.checkToken()
    console.log(expDate)
}

  return (
    <>
      <div>PostHistoryPage</div>
      <button onClick={handleCheckToken}>Check login exp</button>
    </>
  )
}