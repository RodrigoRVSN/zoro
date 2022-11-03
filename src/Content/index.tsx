export const Content = () => {
  console.log('Content render')
  
  return (
    <h1>This content should not being rerendered because is not being direct used</h1>
  )
}