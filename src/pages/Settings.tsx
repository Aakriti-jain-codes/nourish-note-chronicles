import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { useTheme } from "@/hooks/useTheme";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Moon, Type, Bell, Palette } from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const { dark, toggle } = useTheme();
  const [fontSize, setFontSize] = useState<"normal" | "large">(() => {
    return (localStorage.getItem("nn-font-size") as "normal" | "large") || "normal";
  });
  const [notifications, setNotifications] = useState(() => {
    return localStorage.getItem("nn-notifications") !== "false";
  });

  const toggleFontSize = () => {
    const next = fontSize === "normal" ? "large" : "normal";
    setFontSize(next);
    localStorage.setItem("nn-font-size", next);
    document.documentElement.classList.toggle("text-lg", next === "large");
  };

  const toggleNotifications = (val: boolean) => {
    setNotifications(val);
    localStorage.setItem("nn-notifications", String(val));
  };

  return (
    <Layout>
      <SEO title="Settings — NourishNote" description="Customize your NourishNote experience." />
      <section className="container max-w-2xl py-16">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground mb-10">Customize your reading experience.</p>

        <div className="space-y-6">
          {/* Appearance */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Appearance</CardTitle>
              </div>
              <CardDescription>Control how NourishNote looks.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {dark ? <Moon className="w-4 h-4 text-muted-foreground" /> : <Sun className="w-4 h-4 text-muted-foreground" />}
                  <Label htmlFor="dark-mode" className="cursor-pointer">
                    Dark Mode
                    <span className="block text-xs text-muted-foreground font-normal mt-0.5">
                      {dark ? "Currently using dark theme" : "Currently using light theme"}
                    </span>
                  </Label>
                </div>
                <Switch id="dark-mode" checked={dark} onCheckedChange={toggle} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Type className="w-4 h-4 text-muted-foreground" />
                  <Label htmlFor="font-size" className="cursor-pointer">
                    Larger Text
                    <span className="block text-xs text-muted-foreground font-normal mt-0.5">
                      {fontSize === "large" ? "Using larger font size" : "Using default font size"}
                    </span>
                  </Label>
                </div>
                <Switch id="font-size" checked={fontSize === "large"} onCheckedChange={toggleFontSize} />
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Notifications</CardTitle>
              </div>
              <CardDescription>Manage your notification preferences.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-4 h-4 text-muted-foreground" />
                  <Label htmlFor="notifications" className="cursor-pointer">
                    Email Notifications
                    <span className="block text-xs text-muted-foreground font-normal mt-0.5">
                      Receive new article and recipe updates
                    </span>
                  </Label>
                </div>
                <Switch id="notifications" checked={notifications} onCheckedChange={toggleNotifications} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Settings;
