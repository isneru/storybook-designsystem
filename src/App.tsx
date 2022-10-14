import { Envelope, Lock } from "phosphor-react"
import { Button, Checkbox, Heading, Text, TextInput } from "./components"
import { Logo } from "./Logo"

export const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Login and start using
        </Text>
      </header>
      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="font-semibold flex flex-col gap-3">
          <Text>Email address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" id="email" placeholder="johndoe@gmail.com" />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="font-semibold flex flex-col gap-3">
          <Text>Password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" id="password" />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Remember me for 30 days
          </Text>
        </label>
        <Button className="mt-4" type="submit">
          Join Platform
        </Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild>
          <a href="#" className="text-gray-400 underline hover:text-gray-200">
            Forgot your password?
          </a>
        </Text>
        <Text asChild>
          <a href="#" className="text-gray-400 underline hover:text-gray-200">
            Don't have an account? Create one
          </a>
        </Text>
      </footer>
    </div>
  )
}
