import pandas as pd
import json
import re

df = pd.read_csv("F1_2023.csv", encoding='latin-1')
driverlist = df['Driver']
# print(driverlist)

def driverProfile(driverName: str):
    result_df = df[df['Driver'].eq(driverName) & df['Driver'].notna()]

    if result_df.empty:
        return []

    result_list = result_df.values.flatten().tolist()
    result_list.pop(0)
    result_list.pop(0)
    
    return result_list

all_data = {}


def generateAllDriverData():
    for driver in driverlist:
        driverdata = driverProfile(driver)
        race_finishes = 0
        race_wins = 0
        podiums = 0
        total_points = 0
        average = 0
        updated_points = []

        for points in driverdata:
            try:
                print(type(points))
                if type(points) is float:
                    total_points += int(points)
                if int(points) >= 25:
                    race_wins += 1
                if int(points) >= 18:
                    podiums += 1
                race_finishes += 1
                updated_points.append(int(points))
                
            except: 
                updated_points.append(0)
        average = total_points / race_finishes

        all_data[driver] = {}
        all_data[driver]["race_wins"] = int(race_wins)
        all_data[driver]["podiums"] = int(podiums)
        all_data[driver]["total_points"] = int(total_points)
        all_data[driver]["average"] = int(average)
        all_data[driver]["race_finishes"] = updated_points

    print(json.dumps(all_data))


def generateTeamData():

    teamDriverPair = {
        "Red Bull": ["Max Verstappen", "Sergio Perez"],
        "Mercedes": ["Lewis Hamilton", "George Russell"],
        "Aston Martin": ["Fernando Alonso", "Lance Stroll"],
        "Ferrari": ["Charles Leclerc", "Carlos Sainz"],
        "Alpine": ["Esteban Ocon", "Pierre Gasly"],
        "Haas": ["Nico Hulkenberg", "Kevin Magnussen"],
        "Mclaren": ["Lando Norris", "Oscar Piastri"],
        "AlphaTauri": ["Daniel Ricciardo", "Yuki Tsunoda"], 
        "Williams": ["Alex Albon", "Logan Sergeant"],
        "Alfa Romeo":["Zhou Guanyu", "Valterri Bottas"],
    }

    all_data = {}
    for key, value in teamDriverPair.items():
        teamPoints = 0
        teamPodiums = 0
        teamRaceWins = 0

        print(value)
        first = driverProfile(value[0])
        second = driverProfile(value[1])
        final = []

        for points in range(len(first)):
            try:
                if int(first[points]) >= 25:
                    teamRaceWins += 1
                elif int(first[points]) >= 18:
                    teamPodiums += 1

                if int(second[points]) >= 25:
                    teamRaceWins += 1
                elif int(second[points]) >= 25:
                    teamPodiums += 1
                final.append(int(first[points] + second[points]))
            except:
                print("WHOOPS")
                try:
                    final.append(int(first[points] + second[points]))
                except:
                    try:
                        final.append(int(first[points]))
                    except:
                        try:
                            final.appedn(int(second[points]))
                        except:
                            print("Something is horribly wrong, just quit bro")
                            final.append(0)

        teamPoints = int(sum(final))
        all_data[key] = final
        print(final)
    print(json.dumps(all_data))

generateTeamData()