import { ThemeConfig } from 'antd'
import PALLETTE from './pallette.module.scss'
const controlHeight = 50

export const defaultTheme: ThemeConfig = {
  token: {
    colorPrimary: PALLETTE.primaryColor,
    controlHeight: 40,
    fontSize: 16,
    borderRadius: 8,
  },
  components: {
    Button: {
      controlHeight,
      colorText: PALLETTE.primaryTextColor,
    },
    Select: {
      controlHeight,
    },
    DatePicker: {
      controlHeight,
    },
    Input: {
      controlHeight,
    },
    InputNumber: {
      controlHeight,
    },
    Layout: {
      headerBg: PALLETTE.primaryColor,
      headerColor: 'white',
    },
  },
}
