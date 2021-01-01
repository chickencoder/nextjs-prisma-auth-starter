import { useSession, signIn, signOut } from 'next-auth/client'

export default function myComponent() {
  const [session, loading] = useSession()
  return (
    <p>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </p>
  )
}
