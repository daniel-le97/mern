

// import { AppState } from "../AppState.js";

function AccountPage() {

  return (
    <div className="account-page">
      <div className="card">
        <div className="card-body p-5 text-center">
          {/* <img src={AppState.account.picture}
            alt={AppState.account.name}
            className="rounded-circle" height="200" /> */}
          {/* <p className="display-6 my-2">{AppState.account.name}</p> */}
          <kbd>
            {/* {AppState.account.email} */}
          </kbd>
        </div>
      </div>
    </div>
  )
}

export default AccountPage