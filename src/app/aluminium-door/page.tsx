"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function AluminiumDoorPage() {
  const [height, setHeight] = useState(81);
  const [width, setWidth] = useState(30);
  const [heightSoot, setHeightSoot] = useState(0);
  const [widthSoot, setWidthSoot] = useState(0);
  const [chaukhat, setChaukhat] = useState(true);
  const [accessories, setAccessories] = useState(true);
  const [decorFilm, setDecorFilm] = useState(false);
  const [brownCoated, setBrownCoated] = useState(false);

  // Rates for different thicknesses
  const rates = {
    "1.2 MM": {
      door: 130,
      chaukhat: 75,
      accessories: 160,
      decorFilm: 30,
      brownCoated: 60,
    },
    "1.6 MM": {
      door: 180,
      chaukhat: 95,
      accessories: 160,
      decorFilm: 30,
      brownCoated: 60,
    },
    "1.2 MM Hindalco": {
      door: 150,
      chaukhat: 85,
      accessories: 160,
      decorFilm: 30,
      brownCoated: 60,
    },
  };

  const [selectedThickness, setSelectedThickness] = useState<keyof typeof rates>("1.2 MM");

  // Calculations
  const calculations = useMemo(() => {
    const heightInch = heightSoot > 0 ? height + heightSoot / 8 : height;
    const widthInch = widthSoot > 0 ? width + widthSoot / 8 : width;
    const area = Math.round(((heightInch * widthInch) / 144) * 100) / 100;
    const chaukhatRft = Math.max(
      Math.round(((heightInch * 2 + widthInch) / 12) * 100) / 100,
      14.5
    );

    const currentRates = rates[selectedThickness];

    const doorCost = area * currentRates.door;
    const chaukhatCost = chaukhat ? (chaukhatRft * currentRates.chaukhat) : 0;
    const accessoriesCost = accessories ? currentRates.accessories : 0;
    const decorFilmCost = decorFilm ? area * currentRates.decorFilm : 0;
    const brownCoatedCost = brownCoated ? area * currentRates.brownCoated : 0;

    const total = doorCost + chaukhatCost + accessoriesCost;
    const addonsTotal = decorFilmCost + brownCoatedCost;

    const heightDisplay = heightSoot > 0 ? `${height} ${heightSoot}/8''` : `${height} ''`;
    const widthDisplay = widthSoot > 0 ? `${width} ${widthSoot}/8''` : `${width} ''`;
    const sizeDisplay = `${heightDisplay}  X  ${widthDisplay}`;
    const approvedName = `${heightDisplay} X  ${widthDisplay} Aluminium Door`;

    return {
      heightInch,
      widthInch,
      area,
      chaukhatRft,
      doorCost,
      chaukhatCost,
      accessoriesCost,
      decorFilmCost,
      brownCoatedCost,
      total,
      addonsTotal,
      sizeDisplay,
      approvedName,
      heightDisplay,
      widthDisplay,
    };
  }, [height, width, heightSoot, widthSoot, chaukhat, accessories, decorFilm, brownCoated, selectedThickness]);

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="rounded-full border-2 border-white px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-black"
          >
            ← Back to Home
          </Link>
          <div className="flex justify-center">
            <Image
              src="/White Logo.png"
              alt="Shiv Hardware Store Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        </div>

        <div className="mb-4 text-center">
          <h1 className="text-2xl font-bold">Bathroom Aluminium Door With Chaukhat</h1>
        </div>

        {/* Input Section */}
        <div className="mb-8 grid grid-cols-1 gap-6 border-2 border-white p-6 md:grid-cols-3">
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Operator Input</label>
              <div className="text-lg font-semibold">System Output</div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Height</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full rounded border-2 border-white bg-black px-3 py-2 text-white"
                />
                <select
                  value={heightSoot}
                  onChange={(e) => setHeightSoot(Number(e.target.value))}
                  className="w-20 rounded border-2 border-white bg-black px-2 py-2 text-white"
                >
                  <option value={0}>0</option>
                  <option value={1}>1/8</option>
                  <option value={2}>2/8</option>
                  <option value={3}>3/8</option>
                  <option value={4}>4/8</option>
                  <option value={5}>5/8</option>
                  <option value={6}>6/8</option>
                  <option value={7}>7/8</option>
                </select>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Area</label>
              <div className="text-lg font-semibold">{calculations.area} Sqft</div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Width</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full rounded border-2 border-white bg-black px-3 py-2 text-white"
                />
                <select
                  value={widthSoot}
                  onChange={(e) => setWidthSoot(Number(e.target.value))}
                  className="w-20 rounded border-2 border-white bg-black px-2 py-2 text-white"
                >
                  <option value={0}>0</option>
                  <option value={1}>1/8</option>
                  <option value={2}>2/8</option>
                  <option value={3}>3/8</option>
                  <option value={4}>4/8</option>
                  <option value={5}>5/8</option>
                  <option value={6}>6/8</option>
                  <option value={7}>7/8</option>
                </select>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Control Panel</label>
              <select
                value={selectedThickness}
                onChange={(e) => setSelectedThickness(e.target.value as keyof typeof rates)}
                className="w-full rounded border-2 border-white bg-black px-3 py-2 text-white"
              >
                <option value="1.2 MM">1.2 MM</option>
                <option value="1.6 MM">1.6 MM</option>
                <option value="1.2 MM Hindalco">1.2 MM Hindalco</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Thickness -</label>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className={selectedThickness === "1.2 MM" ? "font-bold" : ""}>1.2 MM</div>
                <div className={selectedThickness === "1.6 MM" ? "font-bold" : ""}>1.6 MM</div>
                <div className={selectedThickness === "1.2 MM Hindalco" ? "font-bold" : ""}>1.2 MM Hindalco</div>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Please Fill In The Sizes -</label>
              <div className="text-sm">
                <div>Height X Width</div>
                <div className="mt-2 flex gap-2">
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-20 rounded border-2 border-white bg-black px-2 py-1 text-white"
                  />
                  <span>X</span>
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-20 rounded border-2 border-white bg-black px-2 py-1 text-white"
                  />
                </div>
                <div className="mt-2">Inch - {height} X {width}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Table */}
        <div className="mb-8 overflow-x-auto">
          <table className="w-full border-2 border-white">
            <thead>
              <tr className="border-b-2 border-white">
                <th className="border-r-2 border-white p-2 text-left"></th>
                <th className="border-r-2 border-white p-2 text-center">1.2 MM</th>
                <th className="border-r-2 border-white p-2 text-center">1.6 MM</th>
                <th className="border-r-2 border-white p-2 text-center">1.2 MM Hindalco</th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r-2 border-white p-2">Door</td>
                <td className="border-r-2 border-white p-2 text-center">
                  @{rates["1.2 MM"].door}
                </td>
                <td className="border-r-2 border-white p-2 text-center">
                  {selectedThickness === "1.2 MM" ? `₹${Math.round(calculations.doorCost)}` : ""}
                </td>
                <td className="border-r-2 border-white p-2 text-center">
                  @{rates["1.6 MM"].door}
                </td>
                <td className="border-r-2 border-white p-2 text-center">
                  {selectedThickness === "1.6 MM" ? `₹${Math.round(calculations.doorCost)}` : ""}
                </td>
                <td className="border-r-2 border-white p-2 text-center">
                  @{rates["1.2 MM Hindalco"].door}
                </td>
                <td className="p-2 text-center">
                  {selectedThickness === "1.2 MM Hindalco" ? `₹${Math.round(calculations.doorCost)}` : ""}
                </td>
                <td className="p-2"></td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r-2 border-white p-2">Chaukhat</td>
                <td className="border-r-2 border-white p-2 text-center">
                  @{rates["1.2 MM"].chaukhat}
                </td>
                <td className="border-r-2 border-white p-2 text-center">
                  {selectedThickness === "1.2 MM" && chaukhat ? `₹${Math.round(calculations.chaukhatCost)}` : ""}
                </td>
                <td className="border-r-2 border-white p-2 text-center">
                  @{rates["1.6 MM"].chaukhat}
                </td>
                <td className="border-r-2 border-white p-2 text-center">
                  {selectedThickness === "1.6 MM" && chaukhat ? `₹${Math.round(calculations.chaukhatCost)}` : ""}
                </td>
                <td className="border-r-2 border-white p-2 text-center">
                  @{rates["1.2 MM Hindalco"].chaukhat}
                </td>
                <td className="p-2 text-center">
                  {selectedThickness === "1.2 MM Hindalco" && chaukhat ? `₹${Math.round(calculations.chaukhatCost)}` : ""}
                </td>
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={chaukhat}
                    onChange={(e) => setChaukhat(e.target.checked)}
                    className="h-4 w-4"
                  />
                </td>
              </tr>
              <tr className="border-b border-white">
                <td className="border-r-2 border-white p-2">Accessories</td>
                <td className="border-r-2 border-white p-2 text-center">
                  {accessories ? rates["1.2 MM"].accessories : ""}
                </td>
                <td className="border-r-2 border-white p-2"></td>
                <td className="border-r-2 border-white p-2 text-center">
                  {accessories ? rates["1.6 MM"].accessories : ""}
                </td>
                <td className="border-r-2 border-white p-2"></td>
                <td className="border-r-2 border-white p-2 text-center">
                  {accessories ? rates["1.2 MM Hindalco"].accessories : ""}
                </td>
                <td className="p-2"></td>
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={accessories}
                    onChange={(e) => setAccessories(e.target.checked)}
                    className="h-4 w-4"
                  />
                </td>
              </tr>
              <tr className="border-b-2 border-white font-bold">
                <td className="border-r-2 border-white p-2">Total</td>
                <td className="border-r-2 border-white p-2 text-center">
                  {selectedThickness === "1.2 MM" ? `₹${Math.round(calculations.total)}` : ""}
                </td>
                <td className="border-r-2 border-white p-2"></td>
                <td className="border-r-2 border-white p-2 text-center">
                  {selectedThickness === "1.6 MM" ? `₹${Math.round(calculations.total)}` : ""}
                </td>
                <td className="border-r-2 border-white p-2"></td>
                <td className="border-r-2 border-white p-2 text-center">
                  {selectedThickness === "1.2 MM Hindalco" ? `₹${Math.round(calculations.total)}` : ""}
                </td>
                <td className="p-2"></td>
                <td className="p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Add-ons Section */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-bold">Add-ons</h2>
          <table className="w-full border-2 border-white">
            <tbody>
              <tr className="border-b border-white">
                <td className="border-r-2 border-white p-2">Décor Film</td>
                <td className="border-r-2 border-white p-2 text-center">@30</td>
                <td className="border-r-2 border-white p-2 text-center">
                  {decorFilm ? `₹${Math.round(calculations.decorFilmCost)}` : ""}
                </td>
                <td className="border-r-2 border-white p-2 text-center">@30</td>
                <td className="border-r-2 border-white p-2 text-center">
                  {decorFilm ? `₹${Math.round(calculations.decorFilmCost)}` : ""}
                </td>
                <td className="border-r-2 border-white p-2 text-center">@30</td>
                <td className="p-2 text-center">
                  {decorFilm ? `₹${Math.round(calculations.decorFilmCost)}` : ""}
                </td>
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={decorFilm}
                    onChange={(e) => setDecorFilm(e.target.checked)}
                    className="h-4 w-4"
                  />
                </td>
              </tr>
              <tr>
                <td className="border-r-2 border-white p-2">Brown Coated</td>
                <td className="border-r-2 border-white p-2 text-center">@60</td>
                <td className="border-r-2 border-white p-2 text-center">
                  {brownCoated ? `₹${Math.round(calculations.brownCoatedCost)}` : ""}
                </td>
                <td className="border-r-2 border-white p-2 text-center">@60</td>
                <td className="border-r-2 border-white p-2 text-center">
                  {brownCoated ? `₹${Math.round(calculations.brownCoatedCost)}` : ""}
                </td>
                <td className="border-r-2 border-white p-2 text-center">@60</td>
                <td className="p-2 text-center">
                  {brownCoated ? `₹${Math.round(calculations.brownCoatedCost)}` : ""}
                </td>
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={brownCoated}
                    onChange={(e) => setBrownCoated(e.target.checked)}
                    className="h-4 w-4"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Print Layout Section */}
        <div className="border-2 border-white p-6">
          <div className="mb-4 space-y-2">
            <div>
              <span className="font-bold">Size - </span>
              <span>{calculations.sizeDisplay}</span>
            </div>
            <div>
              <span className="font-bold">Area - </span>
              <span>{calculations.area} Sqft</span>
            </div>
            <div>
              <span className="font-bold">Chaukhat - </span>
              <span>{calculations.chaukhatRft} Rft</span>
            </div>
          </div>
          <div className="mt-6">
            <div className="mb-2">
              <span className="font-bold">PDF Name -</span>
            </div>
            <div>
              <span className="font-bold">Approved Name - </span>
              <span>{calculations.approvedName}</span>
            </div>
          </div>
          <div className="mt-4 flex gap-4">
            <div>{calculations.widthDisplay}</div>
            <div>{calculations.heightDisplay}</div>
          </div>
        </div>

        {/* Print Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => window.print()}
            className="rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-gray-200"
          >
            Print Quote
          </button>
        </div>
      </main>
    </div>
  );
}

