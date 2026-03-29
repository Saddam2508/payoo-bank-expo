import { Redirect, useRootNavigationState } from "expo-router";

export default function RootIndex() {
  const isLoggedIn = false;

  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) {
    return null;
  }

  return isLoggedIn ? (
    <Redirect href="/dashboard" />
  ) : (
    <Redirect href="/(auth)/login" />
  );
}
