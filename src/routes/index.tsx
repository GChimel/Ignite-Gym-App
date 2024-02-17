import { useTheme, Box } from 'native-base';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";

export function Routes() {

  const {colors} = useTheme();

    const theme = DefaultTheme;
    theme.colors.background = colors.gray[700];

  return (
    // Box para evitar bug ao mudar de tela
    <Box flex={1} bg='gray.700'> 
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}