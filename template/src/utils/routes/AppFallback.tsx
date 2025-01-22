import { Flex, Layout, Spin } from 'antd'
import Logo from '../../assets/logo.svg'

export default function AppFallback() {
  return (
    <Flex justify="center" align="center" flex={1} vertical>
      <img src={Logo} width="50%" alt="MusicTMM Logo" />
      <Spin />
    </Flex>
  )
}
