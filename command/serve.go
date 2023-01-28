package command

import (
	"github.com/spf13/cobra"
	"go-doing/config"
	"go-doing/route"
)

var serveCmd = &cobra.Command{
	Use:   "serve",
	Short: "serve - Serves the server and listen for requests",

	RunE: func(cmd *cobra.Command, args []string) error {
		address := config.GetAddress()
		return route.Start(address)
	},
}
