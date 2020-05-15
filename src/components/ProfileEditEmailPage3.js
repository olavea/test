import React, { useState } from "react"
import { useAuthActions } from "../auth"
import { navigate } from "gatsby"

const ProfileEditEmailPage3 = () => {
  const { updateUser } = useAuthActions()
  const [error, setError] = useState()
  const [status, setStatus] = useState()

  const ProgramYourSpy = async (event) => {
    // 1. Go get an idea for a good location
    // 1. Go follow that Fox
    // and prevent that Fox from submitting the event to Queen Mary
    event.preventDefault()
    // 2. Get that adress from the input
    // 2. Listen for when the fox finds the adress, the hiding place of the lov-E-mail
    const email = event.target.elements.emailInput.value
    alert(`You ${email}`)
    setStatus("pending")
    // 3. Escape that email adress to DanielV's Userbase
    // 3.2 await the result "is that a correct email adress?"

    const result = await updateUser({ email: email })
    // 3.3 if not a correct email adress, try again
    if (result.error) {
      setError(result.error)
      setStatus("idle")
    } else {
      setError(false)
      setStatus("idle")

      // 4. Evade that customer safely back to pages /profile if a correct email adress,
      navigate(`/future`)
    }
  }
  return (
    <form onSubmit={ProgramYourSpy}>
      <div>
        <label htmlFor="emailInput">Email</label>
        <input id="emailInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ProfileEditEmailPage3
