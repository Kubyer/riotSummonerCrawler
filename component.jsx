/**
 * v0 by Vercel.
 * @see https://v0.dev/t/a6GNx0P7gT5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ResponsiveLine } from "@nivo/line"

export default function Component() {
  return (
    <div className="px-4 mx-auto max-w-5xl space-y-6">
      <div className="grid gap-4">
        <div className="flex items-center gap-2">
          <GroupIcon className="w-8 h-8" />
          <h1 className="text-2xl font-bold tracking-tighter">OP.GG</h1>
        </div>
        <div className="rounded-xl border grid items-center px-2 gap-2 text-sm dark:border-gray-800">
          <SearchIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input className="h-8 flex-1" placeholder="Search" type="search" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 items-start">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Card>
              <CardHeader className="flex items-center">
                <CardTitle className="mr-auto">Profile</CardTitle>
                <Button size="sm">Update</Button>
              </CardHeader>
              <CardContent className="grid gap-2">
                <div className="text-sm grid grid-cols-2 items-center gap-4">
                  <div className="text-gray-500 dark:text-gray-400">Level</div>
                  <div className="text-right">89</div>
                </div>
                <div>
                  <img
                    alt="Banner"
                    className="aspect-banner object-cover rounded-lg overflow-hidden"
                    height={200}
                    src="/placeholder.svg"
                    width={400}
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center">
                <CardTitle className="mr-auto">Ranked Stats</CardTitle>
                <Button size="sm">Details</Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 items-center gap-4 text-sm">
                  <div className="text-gray-500 dark:text-gray-400">Wins</div>
                  <div className="text-right">154</div>
                  <div className="grid grid-rows-3 items-center gap-1.5">
                    <TrophyIcon className="h-4 w-4 rounded-full border" />
                    <TrophyIcon className="h-4 w-4 rounded-full border" />
                    <TrophyIcon className="h-4 w-4 rounded-full border" />
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">Losses</div>
                  <div className="text-right">123</div>
                  <div className="grid grid-rows-3 items-center gap-1.5">
                    <TrophyIcon className="h-4 w-4 rounded-full border" />
                    <TrophyIcon className="h-4 w-4 rounded-full border" />
                    <TrophyIcon className="h-4 w-4 rounded-full border" />
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">Win Rate</div>
                  <div className="text-right">55%</div>
                  <div className="text-right">
                    <Button size="xs">Share</Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-start gap-4">
                  <div className="grid grid-rows-3 items-center gap-1.5">
                    <TrophyIcon className="h-6 w-6 rounded-full border" />
                    <TrophyIcon className="h-6 w-6 rounded-full border" />
                    <TrophyIcon className="h-6 w-6 rounded-full border" />
                  </div>
                  <div className="grid grid-rows-3 items-center gap-1.5">
                    <TrophyIcon className="h-6 w-6 rounded-full border" />
                    <TrophyIcon className="h-6 w-6 rounded-full border" />
                    <TrophyIcon className="h-6 w-6 rounded-full border" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4">
            <Card>
              <CardHeader className="flex items-center">
                <CardTitle className="mr-auto">Match History</CardTitle>
                <Button size="sm">See All</Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-auto max-h-[300px]">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="pb-0.5 text-left">Champion</th>
                        <th className="pb-0.5 text-center">KDA</th>
                        <th className="pb-0.5 text-center">CS</th>
                        <th className="pb-0.5 text-center">Gold</th>
                        <th className="pb-0.5 text-right">Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="flex items-center gap-2 py-2.5">
                          <TrophyIcon className="h-6 w-6 rounded-full border" />
                          <div className="text-sm font-medium">Aphelios</div>
                        </td>
                        <td className="text-center">6/2/3</td>
                        <td className="text-center">201</td>
                        <td className="text-center">10.2k</td>
                        <td className="text-right">
                          <span className="font-semibold">Victory</span>
                          <div className="text-xs text-gray-500 dark:text-gray-400">2022-07-31</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="flex items-center gap-2 py-2.5">
                          <TrophyIcon className="h-6 w-6 rounded-full border" />
                          <div className="text-sm font-medium">Yone</div>
                        </td>
                        <td className="text-center">3/4/6</td>
                        <td className="text-center">322</td>
                        <td className="text-center">9.8k</td>
                        <td className="text-right">
                          <span className="font-semibold">Defeat</span>
                          <div className="text-xs text-gray-500 dark:text-gray-400">2022-07-31</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="flex items-center gap-2 py-2.5">
                          <TrophyIcon className="h-6 w-6 rounded-full border" />
                          <div className="text-sm font-medium">Lee Sin</div>
                        </td>
                        <td className="text-center">2/5/4</td>
                        <td className="text-center">80</td>
                        <td className="text-center">7.3k</td>
                        <td className="text-right">
                          <span className="font-semibold">Defeat</span>
                          <div className="text-xs text-gray-500 dark:text-gray-400">2022-07-31</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="flex items-center gap-2 py-2.5">
                          <TrophyIcon className="h-6 w-6 rounded-full border" />
                          <div className="text-sm font-medium">Sylas</div>
                        </td>
                        <td className="text-center">3/3/2</td>
                        <td className="text-center">180</td>
                        <td className="text-center">8.1k</td>
                        <td className="text-right">
                          <span className="font-semibold">Victory</span>
                          <div className="text-xs text-gray-500 dark:text-gray-400">2022-07-31</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="flex items-center gap-2 py-2.5">
                          <TrophyIcon className="h-6 w-6 rounded-full border" />
                          <div className="text-sm font-medium">Lucian</div>
                        </td>
                        <td className="text-center">4/2/1</td>
                        <td className="text-center">155</td>
                        <td className="text-center">9.7k</td>
                        <td className="text-right">
                          <span className="font-semibold">Victory</span>
                          <div className="text-xs text-gray-500 dark:text-gray-400">2022-07-31</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center">
                <CardTitle className="mr-auto">Recent Games</CardTitle>
                <Button size="sm">See All</Button>
              </CardHeader>
              <CardContent className="grid gap-4 text-sm">
                <div className="grid grid-cols-2 items-center gap-4">
                  <div>
                    <div className="font-semibold">Win</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">2022-07-31</div>
                  </div>
                  <div className="text-right">
                    <Button size="xs" variant="outline">
                      Details
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <div>
                    <div className="font-semibold">Loss</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">2022-07-31</div>
                  </div>
                  <div className="text-right">
                    <Button size="xs" variant="outline">
                      Details
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <div>
                    <div className="font-semibold">Win</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">2022-07-31</div>
                  </div>
                  <div className="text-right">
                    <Button size="xs" variant="outline">
                      Details
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <div>
                    <div className="font-semibold">Win</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">2022-07-31</div>
                  </div>
                  <div className="text-right">
                    <Button size="xs" variant="outline">
                      Details
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center gap-4">
                  <div>
                    <div className="font-semibold">Loss</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">2022-07-31</div>
                  </div>
                  <div className="text-right">
                    <Button size="xs" variant="outline">
                      Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex items-center">
              <CardTitle className="mr-auto">Top 5 Champions</CardTitle>
              <Button size="sm">See All</Button>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <TrophyIcon className="h-6 w-6 rounded-full border" />
                  <div className="font-semibold">Yasuo</div>
                  <div className="text-gray-500 dark:text-gray-400">Mid</div>
                </div>
                <CurvedlineChart className="w-full aspect-[2/1]" />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <TrophyIcon className="h-6 w-6 rounded-full border" />
                  <div className="font-semibold">Katarina</div>
                  <div className="text-gray-500 dark:text-gray-400">Mid</div>
                </div>
                <CurvedlineChart className="w-full aspect-[2/1]" />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <TrophyIcon className="h-6 w-6 rounded-full border" />
                  <div className="font-semibold">Akali</div>
                  <div className="text-gray-500 dark:text-gray-400">Mid</div>
                </div>
                <CurvedlineChart className="w-full aspect-[2/1]" />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <TrophyIcon className="h-6 w-6 rounded-full border" />
                  <div className="font-semibold">Zed</div>
                  <div className="text-gray-500 dark:text-gray-400">Mid</div>
                </div>
                <CurvedlineChart className="w-full aspect-[2/1]" />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <TrophyIcon className="h-6 w-6 rounded-full border" />
                  <div className="font-semibold">Yone</div>
                  <div className="text-gray-500 dark:text-gray-400">Mid</div>
                </div>
                <CurvedlineChart className="w-full aspect-[2/1]" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center">
              <CardTitle className="mr-auto">Leaderboard</CardTitle>
              <Button size="sm">See All</Button>
            </CardHeader>
            <CardContent className="p-0 grid gap-4">
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="text-2xl font-semibold">1</div>
                <div className="grid gap-1.5">
                  <div className="font-semibold">Challenger</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">100 LP · 20W 10L</div>
                </div>
                <div className="ml-auto grid gap-1.5">
                  <div className="text-sm text-right">Win Rate</div>
                  <div className="font-semibold text-right">67%</div>
                </div>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="text-2xl font-semibold">2</div>
                <div className="grid gap-1.5">
                  <div className="font-semibold">Dopa</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">100 LP · 20W 10L</div>
                </div>
                <div className="ml-auto grid gap-1.5">
                  <div className="text-sm text-right">Win Rate</div>
                  <div className="font-semibold text-right">67%</div>
                </div>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="text-2xl font-semibold">3</div>
                <div className="grid gap-1.5">
                  <div className="font-semibold">Faker</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">100 LP · 20W 10L</div>
                </div>
                <div className="ml-auto grid gap-1.5">
                  <div className="text-sm text-right">Win Rate</div>
                  <div className="font-semibold text-right">67%</div>
                </div>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="text-2xl font-semibold">4</div>
                <div className="grid gap-1.5">
                  <div className="font-semibold">Uzi</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">100 LP · 20W 10L</div>
                </div>
                <div className="ml-auto grid gap-1.5">
                  <div className="text-sm text-right">Win Rate</div>
                  <div className="font-semibold text-right">67%</div>
                </div>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="text-2xl font-semibold">5</div>
                <div className="grid gap-1.5">
                  <div className="font-semibold">TheShy</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">100 LP · 20W 10L</div>
                </div>
                <div className="ml-auto grid gap-1.5">
                  <div className="text-sm text-right">Win Rate</div>
                  <div className="font-semibold text-right">67%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function CurvedlineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function GroupIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}
