import { LinkGenerator } from '../components/links/LinkGenerator'

export function Homepage() {
  return (
    <>
      <title>offnd.at - share the offensiveness</title>
      <meta
        name='description'
        content="The world's most offensive URL shortener. Turn boring links into memorable, profanity-laced phrases."
      />
      <meta property='og:title' content='offnd.at - share the offensiveness' />
      <meta
        property='og:description'
        content='Turn boring links into memorable, profanity-laced phrases. Share the offensiveness.'
      />
      <meta property='og:type' content='website' />
      <LinkGenerator />
    </>
  )
}
