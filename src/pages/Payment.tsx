import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Wallet, DollarSign, TrendingUp, Download, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Payment = () => {
  const [balance] = useState(450000);

  const transactions = [
    {
      id: 1,
      type: "income",
      description: "Course purchase: Web Development",
      amount: 180000,
      date: "2025-10-25",
      status: "completed",
    },
    {
      id: 2,
      type: "withdrawal",
      description: "Withdrawal to bank account",
      amount: -200000,
      date: "2025-10-23",
      status: "completed",
    },
    {
      id: 3,
      type: "income",
      description: "Course purchase: Auto Mechanics",
      amount: 180000,
      date: "2025-10-22",
      status: "completed",
    },
    {
      id: 4,
      type: "topup",
      description: "Wallet top-up via Click",
      amount: 500000,
      date: "2025-10-20",
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Wallet & Payments</h1>
          <p className="text-secondary">Manage your balance and transactions</p>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="col-span-1 md:col-span-2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Wallet className="h-6 w-6" />
                  <span className="text-sm opacity-90">Available Balance</span>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Active
                </Badge>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold mb-2">
                  {balance.toLocaleString()} <span className="text-2xl">UZS</span>
                </p>
                <p className="text-sm opacity-75">≈ ${(balance / 12500).toFixed(2)} USD</p>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" className="flex-1">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Top Up
                </Button>
                <Button variant="secondary" className="flex-1">
                  <ArrowDownRight className="mr-2 h-4 w-4" />
                  Withdraw
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <TrendingUp className="h-8 w-8 text-accent mr-4" />
              <div>
                <p className="text-2xl font-bold text-primary">+25%</p>
                <p className="text-sm text-secondary">This Month</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="transactions" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="topup">Top Up</TabsTrigger>
            <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
          </TabsList>

          {/* Transactions Tab */}
          <TabsContent value="transactions">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Transaction History</CardTitle>
                    <CardDescription>All your wallet activities</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            transaction.type === "income"
                              ? "bg-green-100 text-green-600"
                              : transaction.type === "withdrawal"
                              ? "bg-red-100 text-red-600"
                              : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          {transaction.type === "income" ? (
                            <ArrowDownRight className="h-5 w-5" />
                          ) : (
                            <ArrowUpRight className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-primary">{transaction.description}</p>
                          <p className="text-sm text-secondary">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-semibold ${
                            transaction.amount > 0 ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {transaction.amount > 0 ? "+" : ""}
                          {transaction.amount.toLocaleString()} UZS
                        </p>
                        <Badge
                          variant={transaction.status === "completed" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Top Up Tab */}
          <TabsContent value="topup">
            <Card>
              <CardHeader>
                <CardTitle>Top Up Wallet</CardTitle>
                <CardDescription>Add funds to your wallet</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (UZS)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    defaultValue="100000"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Payment Method</Label>
                  <div className="grid grid-cols-3 gap-4">
                    <Button
                      variant="outline"
                      className="h-20 flex flex-col items-center justify-center"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                        <DollarSign className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-sm font-semibold">Click</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-20 flex flex-col items-center justify-center"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                        <DollarSign className="h-6 w-6 text-accent" />
                      </div>
                      <span className="text-sm font-semibold">Payme</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-20 flex flex-col items-center justify-center"
                    >
                      <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mb-2">
                        <DollarSign className="h-6 w-6 text-coral" />
                      </div>
                      <span className="text-sm font-semibold">Uzum</span>
                    </Button>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm text-secondary mb-2">Transaction Fee: 0%</p>
                  <p className="text-sm font-semibold text-primary">
                    You will receive: 100,000 UZS
                  </p>
                </div>

                <Button
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: "Top Up Initiated",
                      description: "You will be redirected to the payment gateway.",
                    });
                  }}
                >
                  Continue to Payment
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Withdraw Tab */}
          <TabsContent value="withdraw">
            <Card>
              <CardHeader>
                <CardTitle>Withdraw Funds</CardTitle>
                <CardDescription>Transfer money to your bank account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-accent/10 border border-accent rounded-lg p-4">
                  <p className="text-sm text-primary font-semibold mb-1">Available Balance</p>
                  <p className="text-2xl font-bold text-primary">{balance.toLocaleString()} UZS</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="withdrawAmount">Withdrawal Amount (UZS)</Label>
                  <Input
                    id="withdrawAmount"
                    type="number"
                    placeholder="Enter amount"
                    max={balance}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bankAccount">Bank Account Number</Label>
                  <Input id="bankAccount" placeholder="Enter your bank account number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bankName">Bank Name</Label>
                  <Input id="bankName" placeholder="e.g., Uzcard, Humo" />
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm text-secondary mb-1">Processing Fee: 2%</p>
                  <p className="text-sm text-secondary mb-2">Processing Time: 1-3 business days</p>
                  <p className="text-sm font-semibold text-primary">
                    You will receive: ~98,000 UZS (for 100,000 UZS withdrawal)
                  </p>
                </div>

                <Button
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: "Withdrawal Requested",
                      description: "Your request will be processed within 1-3 business days.",
                    });
                  }}
                >
                  Request Withdrawal
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;
